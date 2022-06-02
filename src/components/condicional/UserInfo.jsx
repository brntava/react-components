import If, {Else} from './If'

const UserInfo = (props) => {

    const user = props.user

    return(
        <div>
            <If test={user && user.name}>
                Seja bem vindo <strong>{user.name}</strong>
                <Else>
                    Seja bem vindo <strong>Amigao</strong>
                </Else>
            </If>
        </div>
    )

}

export default UserInfo