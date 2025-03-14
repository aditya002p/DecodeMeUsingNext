import { toast } from "sonner"; // ✅ Ensure correct import
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function: cn (Class Name)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function: errorToast (Displays an error message)
export const errorToast = (description: string, title?: string) =>
  toast.error(title || "Error", {
    description,
  });

// Helper function: image download
function forceDownload(blobUrl: string, filename: string) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// QR Code download function
export function downloadQrCode(url: string, filename: string) {
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch((e) => console.error(e));
}
