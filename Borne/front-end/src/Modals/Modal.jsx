import React, {useEffect} from 'react'


export default function PlateModal({children, setModal}) {

    useEffect(() => {
        document.addEventListener('click', detectClick)
        return () => {
            document.removeEventListener('click', detectClick)
        }
    }, [])

    const detectClick = (e) =>{
        // if(e.target.className === "modal-background"){
        //     setModal(false)
        // }
        console.log(e)
    }
    return (
        <div>
            <div className="modal-background">
                <div className="modal-content">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}
