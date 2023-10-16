import VStack from "@/app/components/VStack";

interface Props {
    title: string;
    description: string;
}

export default function InfoCard({title, description}: Props) {
    return (
        <VStack className="gap-4 text-lg p-4 bg-slate-50 shadow-md rounded-lg">
            <h3 className="text-2xl font-medium underline">{title}</h3>
            <p>{description}</p>
        </VStack>
    );
}