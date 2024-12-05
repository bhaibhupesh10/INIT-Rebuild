import React from 'react';
import { FaPaperclip, FaFilePdf, FaFileWord, FaFileImage } from 'react-icons/fa';

// Sample data for attachments
const attachments = [
  {
    id: 1,
    fileName: 'Resume-AnamoulRouf.pdf',
    fileType: 'Resume',
    fileSize: '1.21 MB',
    fileIcon: <FaFilePdf className="text-red-500 w-10 h-10" />, // Icon for PDF file
  },
  {
    id: 2,
    fileName: 'CoverLetter.docx',
    fileType: 'Cover Letter',
    fileSize: '512 KB',
    fileIcon: <FaFileWord className="text-blue-500 w-10 h-10" />, // Icon for Word file
  },
  {
    id: 3,
    fileName: 'ProfilePicture.png',
    fileType: 'Image',
    fileSize: '245 KB',
    fileIcon: <FaFileImage className="text-green-500 w-10 h-10" />, // Icon for Image file
  },
];

// Component to display each attachment
const AttachmentItem = ({ attachment }) => (
  <div className="flex justify-between items-center p-4 bg-white shadow-sm rounded-lg mb-4">
    <div className="flex items-center space-x-4">
      {/* File Icon */}
      {attachment.fileIcon}
      <div>
        <h4 className="font-semibold text-lg">{attachment.fileName}</h4>
        <p className="text-gray-500">{attachment.fileType}</p>
        <p className="text-gray-500 text-sm">{attachment.fileSize}</p>
      </div>
    </div>
    <div className="flex space-x-2">
      {/* Delete Button */}
      <button className="text-gray-500 hover:text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553L8 5H4a1 1 0 100 2h.293l1.343 9.364A2 2 0 007.621 18h4.758a2 2 0 001.985-1.636L15.707 7H16a1 1 0 100-2h-4l-1.106-1.447A1 1 0 0010 3zM6 7h8l-1.25 8.75a1 1 0 01-.992.884H7.242a1 1 0 01-.992-.884L6 7zm3-2a1 1 0 112 0v1h-2V5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* View Button */}
      <button className="text-blue-500 hover:text-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.166 10C3.526 6.508 6.94 4 10 4c3.061 0 6.474 2.508 7.834 6-1.36 3.492-4.773 6-7.834 6-3.061 0-6.474-2.508-7.834-6zM10 6a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      </button>
      {/* Edit Button */}
      <button className="text-blue-500 hover:text-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0l-10 10a2 2 0 00-.586 1.414V15a2 2 0 002 2h1.586a2 2 0 001.414-.586l10-10a2 2 0 000-2.828l-2.586-2.586zM7 14l8-8 2 2-8 8H7v-2zm-2 1v2h2l8-8-2-2-8 8z" />
        </svg>
      </button>
    </div>
  </div>
);

// Main Attachments Section
const AttachmentsSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <FaPaperclip className="mr-2" /> &nbsp;  Attachments
        </h2>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
          Add File
        </button>
      </div>

      {/* Attachment Items */}
      {attachments.map((attachment) => (
        <AttachmentItem key={attachment.id} attachment={attachment} />
      ))}

      {/* Show More Link */}
      <div className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
        Show 2 More Attachments
      </div>
    </div>
  );
};

export default AttachmentsSection;
