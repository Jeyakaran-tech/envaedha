import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-background" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-bold tracking-tight text-foreground">EnVaedha</span>
                        <p className="text-sm text-muted-foreground">
                            Knowledge, Executed.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6">
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            <span className="sr-only">GitHub</span>
                            <FiGithub className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            <span className="sr-only">Twitter</span>
                            <FiTwitter className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                            <span className="sr-only">LinkedIn</span>
                            <FiLinkedin className="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} EnVaedha. All rights reserved.
                </div>
            </div>
        </footer>
    );

}
