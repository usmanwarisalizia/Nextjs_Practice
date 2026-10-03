 type CardProps = {
        title: string;
        description: string;
        
};

export default function Card({title, description}: CardProps) {
    return (
        <>
        <div className="card flex justify-between flex-col  items-center p-4 rounded shadow-md w-fit bg-gray-900 ">
            <h1 className="text-2xl font-bold mb-2 items-center text-white">{title}</h1>
            <p className=" text-white ">{description}</p> 
        </div>
        </>
    );
}