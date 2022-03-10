import styles from './SpecialVector.module.css';

const SpecialVector = () => {

    //Todo: useEffect
    const animatePath = () => {
        const start =
        `d="M 0,100
        Q 15,15 500,50
        t 500,0
        Q 1000,25 1500,50
        t 500,0
        Q 2000,25 2500,50
        t 500,0
        L 3000,100 3000,200
        L 3000,200 0, 200
        L 0,200 0,100 z
        "`;

        const end =
        `d="M 0,100
        Q 15,15 500,50
        t 500,0
        Q 1000,25 1500,50
        t 500,0
        Q 2000,25 2500,50
        t 500,0
        L 3000,100 3000,200
        L 3000,200 0, 200
        L 0,200 0,100 z
        "`;
    }

    return (
        <svg  className={styles.svg}>
            <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="600">
                <image href='https://picsum.photos/200/300' x="0" y="0" width="100" height="200" />
            </pattern>
            </defs>
            <path fill="url(#img1)" stroke="red"
                d="M 0,100
                Q 15,15 500,50
                t 500,0
                Q 1000,25 1500,50
                t 500,0
                Q 2000,25 2500,50
                t 500,0
                L 3000,100 3000,200
                L 3000,200 0, 200
                L 0,200 0,100 z
                " />
        </svg>
    )
}


export default SpecialVector;
