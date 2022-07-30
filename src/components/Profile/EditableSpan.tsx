import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@mui/material';
import {useAppDispatch, useAppSelector} from "../../bll/state";
import s from './Profile.module.css'
import {updateNameDataTC} from "../../bll/profileReducer";

type PropsType = {}

export const EditableSpan = React.memo((PropsType) => {
    const dispatch = useAppDispatch()

    const userName = useAppSelector(state => state.profile.name);


    const [editMode, setEditMode] = useState<boolean>(false) //режим редактирования
    const [localTitle, setLocalTitle] = useState<string>(userName) //сохранение состояния инпута до отправки на сервер

    // const activateViewMode = useCallback(() => {
    //     changeTitle(localTitle)
    //     setEditMode(false)
    // }, [changeTitle, localTitle])
    //
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalTitle(e.currentTarget.value)
    }

    const onDoubleClickHandler = () => {

        setEditMode(true);
    }

    const onBlurHandler = () => {
        dispatch(updateNameDataTC(localTitle))
        setEditMode(false);
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onBlurHandler();
        }
    }

    return editMode
        ? <TextField
            id="input-with-sx"
            variant="standard"
            value={localTitle}
            onChange={onChangeHandler}
            // onKeyDown={onKeyPressHandler}
            onBlur={onBlurHandler}
            autoFocus
            color={'secondary'}
        />
        :
        <span className={s.userName} onDoubleClick={onDoubleClickHandler}>{userName}
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.34493 0.958172C10.1228 0.858708 10.9097 1.17678 11.7093 1.92915L11.7102 1.93002C12.5125 2.68875 12.8778 3.45841 12.823 4.24233C12.77 4.99983 12.3309 5.64097 11.8301 6.17001M11.8301 6.17001L6.35951 11.9605C6.20529 12.1284 5.99762 12.2706 5.80076 12.3759C5.60137 12.4825 5.37072 12.5738 5.1542 12.6122L5.15087 12.6128L3.00497 12.9794C2.48459 13.0691 1.98559 12.939 1.63012 12.6019C1.27515 12.2653 1.11829 11.7744 1.1764 11.2514L1.17657 11.2499L1.42431 9.08054C1.45308 8.86474 1.53323 8.63122 1.6277 8.42864C1.72183 8.22679 1.85027 8.01276 2.00226 7.85096L2.00323 7.84993L7.47656 2.05659C7.97759 1.52734 8.59328 1.05429 9.34493 0.958172M8.20312 2.7437C8.20303 2.74379 8.2032 2.74362 8.20312 2.7437L2.7311 8.53564C2.73099 8.53576 2.73122 8.53552 2.7311 8.53564C2.67646 8.59395 2.60139 8.70678 2.53399 8.85129C2.46782 8.99319 2.42807 9.12446 2.41616 9.20884L2.17029 11.3618C2.17026 11.3621 2.17024 11.3623 2.17021 11.3625C2.14187 11.6192 2.22163 11.7847 2.31824 11.8763C2.41444 11.9676 2.5821 12.0375 2.83506 11.9939L2.83583 11.9938L4.98057 11.6274C5.06408 11.6123 5.19276 11.567 5.32927 11.494C5.46765 11.42 5.57176 11.3402 5.62387 11.2831L5.62984 11.2765L11.1032 5.48326C11.549 5.01236 11.7967 4.58326 11.8254 4.1726C11.8523 3.78829 11.6943 3.29146 11.0237 2.6571C10.3568 2.02977 9.85386 1.90123 9.47177 1.95009C9.06349 2.0023 8.64866 2.27312 8.20312 2.7437Z"
                      fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.84971 2.87261C7.12256 2.8301 7.37821 3.01683 7.42072 3.28968C7.67213 4.90342 8.98182 6.1385 10.6101 6.3025C10.8849 6.33017 11.0852 6.57534 11.0575 6.85009C11.0298 7.12484 10.7847 7.32514 10.5099 7.29746C8.43154 7.08813 6.75455 5.50987 6.43264 3.44362C6.39013 3.17077 6.57686 2.91512 6.84971 2.87261Z"
                      fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.5 14.6666C0.5 14.3905 0.723858 14.1666 1 14.1666H13C13.2761 14.1666 13.5 14.3905 13.5 14.6666C13.5 14.9428 13.2761 15.1666 13 15.1666H1C0.723858 15.1666 0.5 14.9428 0.5 14.6666Z"
                      fill="black"/>
            </svg>
             </span>

})