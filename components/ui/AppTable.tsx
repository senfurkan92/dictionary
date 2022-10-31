interface AppTableProps {
    cols: string[],
    rows: (string | JSX.Element)[][],
}

const AppTable = (props : AppTableProps) : JSX.Element => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full table-fixed">
                <thead>
                    <tr>
                        {
                            props.cols.map((x,i) => <th className="bg-secondary text-secondary-content" key={i}>{x}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows.map((x,i) => {
                            return <tr key={i}>
                                {
                                    x.map((xx,ii) => <td key={i*10 + ii}>
                                        {xx}
                                    </td>)
                                }
                            </tr>
                        })
                    }               
                </tbody>
            </table>
        </div>
    )
}

export default AppTable