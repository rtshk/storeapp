'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // optional utility for className merging

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {

  };

  return (
    <div className="h-32 flex items-center justify-center">
      <div
        className={cn(
          'w-full max-w-md p-6 bg-white rounded-lg shadow-lg border-2 border-dashed'
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current?.click()}
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
        />

        <div className="flex flex-col items-center justify-center text-center">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Preview"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          ) : (
            <>
              <p className="text-gray-500">Drag and drop an image here, or click to select</p>
              <span className="text-sm text-gray-400">(Only image files supported)</span>
            </>
          )}
        </div>
      </div>

      {selectedFile && (
        <button
          onClick={handleUpload}
          className="mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Upload
        </button>
      )}
    </div>
  );
}
