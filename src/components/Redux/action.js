export function addNote(content,title){
    return{
        type:'ADD_NOTE',
        title:title,
        content:content
    }
}

export function removeNote(id){
    return{
        type:'REMOVE_NOTE',
        id:id
    }
}

export function updateNote(id,title,content){
    return{
        type:'UPDATE_NOTE',
        id:id
    }
}