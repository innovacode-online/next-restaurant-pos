import Link from 'next/link';

interface Props {
    title: string;
    description: string;

    pathName: string;
    linkName: string;
}

export const HeaderPage = ({ title, description, linkName, pathName }: Props) => {
    return (
        <section className='header'>
            <div>
                <h1 className='text-4xl font-semibold mb-2'>{ title }</h1>
                <p className='text-gray-500'>{ description }</p>
            </div>

            <Link className='block text-primary' href={ pathName }>
                { linkName }
            </Link>

        </section>
    )
}
