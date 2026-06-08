"use client";

import { Tldraw } from "tldraw"
import 'tldraw/tldraw.css'
import { useRef, useState } from "react";
export default function Canvas() {

    // recorder ref
    const recordRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]); // chunks of media
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [transcript, setTranscript] = useState<string | null>(null);

    async function startRecording() {
        const constraints = { audio: true} // tells the browser what media you want access to 
        const stream = await navigator.mediaDevices.getUserMedia(constraints); // user
        const recorder = new MediaRecorder(stream);


        // chunks reset
        chunksRef.current = []; // uses ref state so the actual value lives inside .current

        recorder.ondataavailable = (e) => {
            chunksRef.current.push(e.data)
        }
        // on recorder stop
        recorder.onstop = async () => {
            const blob = new Blob(chunksRef.current, { type: recorder.mimeType });
            setAudioUrl(URL.createObjectURL(blob));
            //
            stream.getTracks().forEach((track) => track.stop());
            const formData = new FormData();
            formData.append("audio", blob, "recording.webm");
            const res = await fetch("/api/transcribe", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                console.error(await res.text());
                return;
            }

            const data = await res.json();
            setTranscript(data.text);

        }

        recordRef.current = recorder;
        recorder.start();

    }

    function stopRecording() {
        recordRef.current?.stop();
    }


    return (
        <main className="flex justify-center items-center min-h-screen bg-zinc-100">
        <div className="w-225 h-150 rounded-2xl overflow-hidden border shadow-xl">
            <div className="absolute top-3 left-3 z-10 flex gap-2">
                <button onClick={startRecording}>Record</button>
                <button onClick={stopRecording}>Stop</button>
                {audioUrl && <audio controls src={audioUrl} />}
            </div>
            {transcript && <p>{transcript}</p>}
            <Tldraw />
        </div>
        </main>

    )
}
