import style from './Loader.module.css';

export const Loader = () => {

    return (
        <div className={style.container} >
            <div className={style.pokeball}>
                <div className={style.pokeball__button}></div>
            </div>
        </div>
    );
};
