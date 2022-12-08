
import home from '../views/home'
import kelas_1 from '../views/kelas_1';
import kelas_2 from '../views/SP0021';
import ulasan from '../views/ulasan_kami'

 
const routes = {

  '/': home, // default page
  '/home': home,
  '/ulasan': ulasan,
  '/kelas_1': kelas_1,
  '/kelas_2': kelas_2,
//   '/detail/:id': Detail,
};
 
export default routes;