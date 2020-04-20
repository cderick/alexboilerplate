import React, { Component } from 'react'

class RepDataSection extends Component {
    render() {
        const { reportData } = this.props
        if (!reportData) return null
        return (
            <div className="container p-0">
                {reportData && reportData.length > 0 &&
                    reportData.map((repData, repIdx) => (
                        <section className="pb-4" key={`repUnique ${repIdx}`}>
                            <div className="row">
                                <div className="col">
                                    <section className="pt-3 pb-2">
                                        {repData.title && <h3 className="text-muted">{repData.title}</h3>}
                                    </section>
                                </div>
                            </div>
                            <section>
                                {repData.double ?
                                    <section>
                                        {repData.listData && repData.listData.length > 0 &&
                                            repData.listData.map((repList, repLiIDX) => (
                                                <div key={`repLiUnique ${repLiIDX}`} className="row">
                                                    <div className="col-8">
                                                        <section>
                                                            {repList.name && <p>{repList.name}</p>}
                                                        </section>
                                                    </div>
                                                    <div className="col-2">
                                                        <section className="text-center">
                                                            {repList.items && <p>{repList.items}</p>}
                                                        </section>
                                                    </div>
                                                    <div className="col-2">
                                                        <section className="text-right">
                                                            {repList.weigth && <p>{repList.weigth}</p>}
                                                        </section>
                                                    </div>
                                                </div>
                                            ))}
                                    </section>
                                    :
                                    <section>
                                        {repData.listData && repData.listData.length > 0 &&
                                            repData.listData.map((repList, repLiIDX) => (
                                                <div key={`notDouble ${repLiIDX}`} className="row">
                                                    <div className="col-10">
                                                        <section>
                                                            {repList.name && <p>{repList.name}</p>}
                                                        </section>
                                                    </div>
                                                    <div className="col-2">
                                                        <section className="text-right">
                                                            {repList.numbers && <p>{repList.numbers}</p>}
                                                        </section>
                                                    </div>
                                                </div>
                                            ))}
                                    </section>}
                            </section>
                        </section>
                    ))}
            </div>
        )
    }
}

export default RepDataSection