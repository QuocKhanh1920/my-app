import './DataBoard.modules.scss';

import useFetch from '../useFetch';

function DataBoard() {
    const { data: dataPost, isLoadings, isError } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div style={{ width: '100%' }}>
            <h2>Post API</h2>
            <table>
                {console.log('data: ', dataPost)}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false &&
                        isLoadings === false &&
                        dataPost &&
                        dataPost.length > 0 &&
                        dataPost.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            );
                        })}

                    {isLoadings === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>
                                Loading ...
                            </td>
                        </tr>
                    )}

                    {isError === true && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>
                                Something wrongs ...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DataBoard;
