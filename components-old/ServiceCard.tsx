type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export default function ServiceCard({
    title,
    description,
    icon,
}: ServiceCardProps) {
    return (
        <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-xl transition">
            <div className="text-indigo-600 mb-4 text-3xl">{icon}</div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}