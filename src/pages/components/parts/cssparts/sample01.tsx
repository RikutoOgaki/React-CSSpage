import style from './css/smaple01.module.css'

export default function Sample01() {
    return (
        <>
            <div>
                <ul className={style.ul}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">CONTENTS1</a>
                        <ul>
                            <li><a href="/">CONTENTS1-1</a></li>
                            <li><a href="/">CONTENTS1-2</a></li>
                            <li><a href="/">CONTENTS1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="/">CONTENTS2</a>
                        <ul>
                            <li><a href="/">CONTENTS2-1</a></li>
                            <li><a href="/">CONTENTS2-2</a></li>
                            <li><a href="/">CONTENTS2-3</a></li>
                        </ul>
                    </li>
                    <li><a href="/">CONTENTS3</a>
                        <ul>
                            <li><a href="/">CONTENTS3-1</a></li>
                            <li><a href="/">CONTENTS3-2</a></li>
                            <li><a href="/">CONTENTS3-3</a></li>
                        </ul>
                    </li>
                    <li><a href="/">CONTENTS4</a>
                        <ul>
                            <li><a href="/">CONTENTS4-1</a></li>
                            <li><a href="/">CONTENTS4-2</a></li>
                            <li><a href="/">CONTENTS4-3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}