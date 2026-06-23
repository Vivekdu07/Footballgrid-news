2. In the main text content box, paste this final configuration snippet:
   ```jsx
   import './globals.css';

   export const metadata = {
     title: 'SportGrid News Network',
     description: 'Live Football Scores, Breaking News, and Transfer Centers',
   };

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     );
   }
