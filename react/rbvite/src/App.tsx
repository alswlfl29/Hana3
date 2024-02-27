import './App.css';
import { Hello } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './contexts/session-context';
import Posts from './components/Posts';
import { Nav } from './Nav';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { NotFound } from './NotFound';
import { Home } from './components/Home';
import Sample from './components/Sample';
import DeferTrans from './components/DeferTrans';
import { PostLayout } from './components/PostLayout';
import { PostDetail } from './components/PostDetail';
import { ItemLayout } from './components/items_v1/ItemLayout';
import { Items } from './components/items_v1/Items';
import { Item } from './components/items_v1/Item';
// import DeferTrans from './components/DeferTrans';
// import Effect from './components/Effect';

function App() {
  // const nextId = useRef(session.cart[session.cart.length - 1].id + 1);
  // const logoutBtnRef = createRef<HTMLButtonElement>();

  return (
    <>
      <SessionProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my' element={<My />} />
          <Route path='/posts' element={<PostLayout />}>
            <Route index element={<Posts />} />
            <Route path=':id' element={<PostDetail />} />
          </Route>
          <Route path='/v1/items' element={<ItemLayout />}>
            <Route index element={<Items />} />
            <Route path=':id' element={<Item />} />
          </Route>
          <Route path='/hello' element={<Hello />} />
          <Route path='/sample' element={<Sample />} />
          <Route path='/defertrans' element={<DeferTrans />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SessionProvider>
      {/* <Effect /> */}
      {/* <DeferTrans /> */}
      {/* <button onClick={() => logoutBtnRef.current?.click()}>Sign-Out</button> */}
    </>
  );
}

export default App;
