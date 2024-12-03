import Profile from './components/Profile/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import transaction from './TransactionHistory.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transaction} />
        </>

    );
}

export default App;
        