import { Plus } from "lucide-react";
import React, { useRef, useState } from "react";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB.");
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      onChange(event.target?.result as string);
      setIsLoading(false);
    };
    reader.onerror = () => {
      alert("Failed to read file.");
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div
        onClick={handleClick}
        className="relative aspect-video rounded-2xl bg-linear-to-br from-gray-100 to-gray-50 border-2 border-dashed border-primary-600 hover:border-primary-500 transition-colors cursor-pointer overflow-hidden group"
      >
        {value ? (
          <>
            <img
              src={value}
              alt="Product preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleRemove}
                className="px-3 py-1.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="px-3 py-1.5 bg-white text-gray-800 text-sm rounded-lg hover:bg-gray-100 transition-colors"
              >
                Change
              </button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <div className="w-8 h-8 mb-2 rounded-full bg-primary-600/10 flex items-center justify-center">
                  <Plus className="h-5 text-primary-600" />
                </div>
                <p className="text-sm font-medium">Click to upload</p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG up to 10MB
                </p>
              </>
            )}
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      {value && (
        <p className="text-xs text-gray-500 text-center">
          Image ready. Click image to change.
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
