
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonScreen = () => {
    return (
        <>
            <SkeletonTheme >
                <section className="box">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-4 col-md-4 col-sm-4 bg-light mt-1">
                                <div className="skeaton mt-5">
                                    <Skeleton height={50} />
                                    <Skeleton width={70} />
                                    <hr />
                                    <Skeleton height={50} />
                                    <Skeleton width={100} />
                                    <Skeleton height={50} />
                                    <Skeleton width={120} />
                                    <Skeleton height={40} />
                                    <Skeleton width={140} />
                                    <Skeleton width={155} />
                                </div>
                            </div>
                            <div className="col col-lg-8 col-md-8 col-sm-8 bg-light ">
                                <div className="row py-2">
                                    <div className="col  mt-5">
                                        <Skeleton height={200} />
                                    </div>
                                    <div className="col mt-5">
                                        <div className="leftRight d-flex justify-content-between ">
                                            <div className="left">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                                <Skeleton width={140} />
                                            </div>
                                            <div className="right text-align-right">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col  mt-4">
                                        <Skeleton height={200} />
                                    </div>
                                    <div className="col mt-5">
                                        <div className="leftRight d-flex justify-content-between ">
                                            <div className="left">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                                <Skeleton width={140} />
                                            </div>
                                            <div className="right text-align-right">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col  mt-5">
                                        <Skeleton height={200} />
                                    </div>
                                    <div className="col mt-5">
                                        <div className="leftRight d-flex justify-content-between ">
                                            <div className="left">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                                <Skeleton width={140} />
                                            </div>
                                            <div className="right text-align-right">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col  mt-5">
                                        <Skeleton height={200} />
                                    </div>
                                    <div className="col mt-5">
                                        <div className="leftRight d-flex justify-content-between ">
                                            <div className="left">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                                <Skeleton width={140} />
                                            </div>
                                            <div className="right text-align-right">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col  mt-5">
                                        <Skeleton height={200} />
                                    </div>
                                    <div className="col mt-5">
                                        <div className="leftRight d-flex justify-content-between ">
                                            <div className="left">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                                <Skeleton width={140} />
                                            </div>
                                            <div className="right text-align-right">
                                                <Skeleton width={100} />
                                                <Skeleton width={120} height={50} />
                                                <Skeleton width={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SkeletonTheme>
        </>

    )
}

export default SkeletonScreen;