import {useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import '../index.css'

function Home() {
    const [inProp, setInProp] = useState(true);
    const nodeRef = useRef(null);
    return (
        <div>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="my-node">
                <div ref={nodeRef}>
                    {"I'll receive my-node-* classes"}
                </div>
            </CSSTransition>
            <button type="button" onClick={() => setInProp(true)}>
                Click to Enter
            </button>
        </div>
    );
}

export default Home