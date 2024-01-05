import { useSearchParams } from 'react-router-dom';

export const Topic = () => {
    const [params, setParams] = useSearchParams();
    console.log(params);
    return (
        <div>
            <h2>Topic</h2>
            Topic...{params.get('name')}
        </div>
    )
}