import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
            <div className="mb-8 text-8xl font-bold text-primary">404</div>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Page Not Found
            </h1>
            <p className="mb-8 max-w-md text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back to the event!
            </p>
            <Link
                href="/"
                className="btn-primary"
            >
                Back to Home
            </Link>
        </div>
    );
}
