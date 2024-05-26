import Footer from "../_components/Footer";
import { Provider } from "../providers";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };
  
export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    {children}
                    <Footer/>
                </Provider>
            </body>
        </html>
    )
}