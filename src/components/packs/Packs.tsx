import * as React from 'react';
import {Navigate} from "react-router-dom";
import {Button} from '@mui/material';
import {PacksTable} from './PacksTable';
import {useAppDispatch, useAppSelector} from "../../bll/state";
import s from './Packs.module.css'
import {getPacksTC} from "../../bll/packsReducer";
import {useEffect} from "react";


export const formatDate = (date: Date | string | number) => {
    return new Date(date).toLocaleDateString('ru-RU') + ' ' + new Date(date).toLocaleTimeString()
}

export const Packs = React.memo(() => {
    //const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)
    // const page = useAppSelector(state => state.packs.params.page)
    // const pageCount = useAppSelector(state => state.packs.params.pageCount)
    // const minCardsCount = useAppSelector(state => state.packs.minCardsCount)
    // const maxCardsCount = useAppSelector(state => state.packs.maxCardsCount)
    // const min = useAppSelector(state => state.packs.params.min)
    // const max = useAppSelector(state => state.packs.params.max)
    // const isMyPack = useAppSelector(state => state.packs.isMyPack)
    // const packName = useAppSelector(state => state.packs.params.packName)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    // const [value, setValue] = React.useState<number | number[]>([min, max]);
    //
    // const debouncedValue = useDebounce<string>(packName, 1000)

    // // All Packs and My Packs
    // const allPacksHandler = () => {
    //     dispatch(isMyPackAC(false))
    // };
    //
    // const myPacksHandler = () => {
    //     dispatch(isMyPackAC(true))
    // }

    // // Packs Paginator
    // const handleChangePage = (
    //     event: React.MouseEvent<HTMLButtonElement> | null,
    //     newPage: number,
    // ) => {
    //     dispatch(setPageAC(newPage + 1))
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     dispatch(setPageCountAC(Number(event.target.value)))
    //     dispatch(setPageAC(1))
    // };
    //
    // // Min and Max scale of cards in pack
    // const handleChangeMinMax = (event: React.SyntheticEvent | Event, value: number | Array<number>) => {
    //     if (Array.isArray(value)) {
    //         dispatch(setMinMaxAC(value[0], value[1]));
    //         setValue([value[0], value[1]])
    //     }
    // };

    useEffect(() => {
        dispatch(getPacksTC())
    }, []);
       // [dispatch, debouncedValue, isMyPack, min, max, pageCount, page])

    // const returnToProfile = () => {
    //     navigate('/profile')
    // }

    if (!isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            {/*<Navbar/>*/}
            <div className={s.wrapper}>
                <div className={s.titleBlock}>
                    <h1 className={s.title}>Packs List</h1>
                    <Button className={s.btn}
                            variant={'contained'}
                            color="secondary"
                        // onClick={}
                    >
                        Add new pack
                    </Button>
                </div>
                <div className={s.panel}>
                    <div className={s.sidebarBlock}>
                        <div className={s.search}>
                            {/*<SearchAppBar title={'Add new pack'}*/}
                            {/*              goBack={returnToProfile}*/}
                            {/*              value={packName}*/}
                            {/*              onChange={(e) => {*/}
                            {/*                  dispatch(searchAC(e.currentTarget.value))*/}
                            {/*              }}*/}
                            {/*/>*/}
                        </div>
                        <div className={s.buttons}>
                            {/*<Button variant={isMyPack ? 'contained' : 'outlined'}*/}
                            {/*        color="secondary"*/}
                            {/*        onClick={myPacksHandler}>*/}
                            {/*    My*/}
                            {/*</Button>*/}
                            {/*<Button variant={!isMyPack ? 'contained' : 'outlined'}*/}
                            {/*        color="secondary"*/}
                            {/*        onClick={allPacksHandler}>*/}
                            {/*    All*/}
                            {/*</Button>*/}
                        </div>
                        <div className={s.numberCard}>
                            <p className={s.sidebarBlock}>Number of cards</p>
                            <div className={s.rangeSlider}>
                                {/*<RangeSlider*/}
                                {/*    min={minCardsCount}*/}
                                {/*    max={maxCardsCount}*/}
                                {/*    value={value}*/}
                                {/*    onChange={(e, newValue) => setValue(newValue)}*/}
                                {/*    onChangeCommitted={handleChangeMinMax}*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>


                    <PacksTable/>


                    <div className={s.paginatorBlock}>
                        {/*<Pagination*/}
                        {/*    count={cardPacksTotalCount}*/}
                        {/*    page={page - 1}*/}
                        {/*    onPageChange={handleChangePage}*/}
                        {/*    rowsPerPage={pageCount}*/}
                        {/*    onRowsPerPageChange={handleChangeRowsPerPage}/>*/}
                    </div>
                </div>

            </div>
        </div>
    )
});
