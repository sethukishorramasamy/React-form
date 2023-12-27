// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import { FaUpload } from 'react-icons/fa';
// import './UploadFiles.css'; // Create a CSS file for styling

// const UploadFiles = () => {
//     const onDrop = (acceptedFiles) => {
//         // Handle the uploaded files
//         console.log(acceptedFiles);
//     };

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         onDrop,
//         multiple: true, // Allow multiple file uploads
//     });

//     return (
//         <div className="upload-container" {...getRootProps()}>
//             <input {...getInputProps()} />
//             <div className={`upload-content ${isDragActive ? 'drag-active' : ''}`}>
//                 <FaUpload className="upload-icon" />
//                 {isDragActive ? (
//                     <p>Drop the files here ...</p>
//                 ) : (
//                     <p>Drag 'n' drop some files here, or click to select files</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UploadFiles;
