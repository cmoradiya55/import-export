'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
    children: React.ReactNode;
    animation?: string;
    delay?: string;
    className?: string;
}

export default function AnimateOnScroll({
    children,
    animation = 'animate__fadeInUp',
    delay = '',
    className = '',
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? `animate__animated ${animation} ${delay}` : 'opacity-0'
                }`}
        >
            {children}
        </div>
    );
}
