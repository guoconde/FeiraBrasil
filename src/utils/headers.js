export default function getHeaders(user,session){
    let headers = ""
    if(user) headers = { headers: { Authorization: `Bearer ${user.token}` }}
    else if(session) headers = { headers: { Authorization: `Bearer ${session.token}` }}
    return headers
}

