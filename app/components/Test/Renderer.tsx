import ButtonComp from './Button';

export default function Renderer({ data }: { data: any }) {
    return (
        <>
            {Object.entries(data).map(([key, el]) => {
                if ((el as any).type === 'button') return <ButtonComp key={key} {...(el as any)} />;
                if ((el as any).type === 'banner') {
                    const c = (el as any).content || {};
                    return <div key={key} style={(el as any).style as React.CSSProperties}>
                        <h1>{c.title}</h1>
                        <p>{c.subtitle}</p>
                        {c.image && <img src={c.image} alt={c.title} />}
                    </div>;
                }
                return null;
            })}
        </>
    );
}
