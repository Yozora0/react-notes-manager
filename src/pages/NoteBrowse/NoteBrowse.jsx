import s from './style.module.css'
import {TextCard} from "../../components/TextCard/TextCard";
import {NoteList} from "../../containers/NoteList/NoteList";

export function NoteBrowse({props}){
    return <>
        <NoteList/>
    </>
}