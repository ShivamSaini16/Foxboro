// import React, { useState } from 'react';
// import { Box, IconButton, Modal } from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { QRCodeScanner } from 'react-qr-reader'; // Import the QR scanner correctly

// function WhatsAppScanner() {
//     const [openScanner, setOpenScanner] = useState(false);

//     // Toggle the QR code scanner modal
//     const handleScannerToggle = () => {
//         setOpenScanner(!openScanner);
//     };

//     // QR Code scanner handling
//     const handleScan = (data) => {
//         if (data) {
//             alert(`Scanned QR Code: ${data}`);
//             setOpenScanner(false); // Close the scanner after scanning
//         }
//     };

//     const handleError = (error) => {
//         console.log(error);
//     };

//     return (
//         <div>
//             {/* WhatsApp Icon */}
//             <Box className="fixed bottom-4 right-4">
//                 <IconButton onClick={handleScannerToggle} className="bg-green-300 text-white p-2 rounded-full shadow-md">
//                     <WhatsAppIcon sx={{ fontSize: 90, color: 'yellow' }} />
//                 </IconButton>
//                 <QRCodeReader
//                     delay={300}
//                     onError={handleError}
//                     onScan={handleScan}
//                     style={{ width: '100%', height: '100%' }}
//                 />

//             </Box>

//             {/* Modal for QR Code Scanner */}
//             <Modal
//                 open={openScanner}
//                 onClose={handleScannerToggle}
//                 aria-labelledby="scanner-modal"
//                 aria-describedby="qr-code-scanner"
//             >
//                 <Box className="flex justify-center items-center h-full bg-black bg-opacity-50">
//                     <div className="bg-white p-4 rounded-md shadow-lg max-w-sm">
//                         <h2 className="text-lg font-semibold text-center mb-4">Scan QR Code</h2>

//                         {/* QR Code Scanner */}
//                         <div className="flex justify-center">
//                             {/* This is the updated QR code scanner */}
//                             <QRCodeScanner
//                                 onScan={handleScan}  // Handle the scan result
//                                 onError={handleError}  // Handle any errors
//                                 className="w-full h-full"
//                             />
//                         </div>

//                         <button
//                             onClick={handleScannerToggle}
//                             className="w-full mt-4 py-2 bg-red-500 text-white rounded-md"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }

// export default WhatsAppScanner;
