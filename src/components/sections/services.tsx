import { Card } from "../ui/card";
import { FiCode, FiCloud, FiLayout, FiDatabase, FiSmartphone, FiShield } from "react-icons/fi";

const services = [
    {
        title: "Custom Development",
        description: "Tailor-made software solutions built to address your specific business challenges.",
        icon: <FiCode size={24} className="text-blue-500" />,
    },
    {
        title: "Cloud Architecture",
        description: "Scalable, secure, and cost-effective cloud infrastructure design and management.",
        icon: <FiCloud size={24} className="text-blue-500" />,
    },
    {
        title: "UI/UX Design",
        description: "Intuitive and engaging user interfaces that delight your customers.",
        icon: <FiLayout size={24} className="text-blue-500" />,
    },
    {
        title: "Database Optimization",
        description: "High-performance database schema design and query optimization.",
        icon: <FiDatabase size={24} className="text-blue-500" />,
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: <FiSmartphone size={24} className="text-blue-500" />,
    },
    {
        title: "Security Audits",
        description: "Comprehensive security assessments to protect your data and users.",
        icon: <FiShield size={24} className="text-blue-500" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Expertise</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600">
                        We bring a wealth of experience across the entire software development lifecycle.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-neutral-50 border-neutral-200 hover:border-blue-500 transition-colors cursor-default">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold leading-8 text-black">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-neutral-600">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
