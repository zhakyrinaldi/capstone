import Detail from '../views/detail_kelas';

import home from '../views/home';
import kelas_1 from '../views/kelas_1';
import kelas_2 from '../views/kelas_2';
import kelas_3 from '../views/kelas_3';
import kelas_4 from '../views/kelas_4';
import kelas_5 from '../views/kelas_5';
import kelas_6 from '../views/kelas_6';
import kelas_7 from '../views/kelas_7';
import ulasan from '../views/ulasan_kami';
import forma from '../views/form';

const routes = {
  '/': home, // default page
  '/home': home,
  '/ulasan': ulasan,
  '/kelas_1': kelas_1,
  '/kelas_2': kelas_2,
  '/kelas_3': kelas_3,
  '/kelas_4': kelas_4,
  '/kelas_5': kelas_5,
  '/kelas_6': kelas_6,
  '/kelas_7': kelas_7,
  '/detail/:id': Detail,
  '/form': forma,
  //   '/detail/:id': Detail,
};

export default routes;
