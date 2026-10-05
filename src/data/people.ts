// People who appear in the directory but do NOT have their own profile page
// (faculty, UROPs). Formerly _data/people.yml. The People page merges these
// with the `members` collection.

export interface ExtraPerson {
  kerberos: string;
  name: string;
  position: 'Faculty' | 'UROP' | 'SuperUROP';
  title?: string;
  office?: string;
  webpage?: string;
  portrait?: string;
  active: boolean;
}

export const extraPeople: ExtraPerson[] = [
  // Faculty
  {
    kerberos: 'jhow',
    name: 'Prof. Jonathan P. How',
    position: 'Faculty',
    title: 'Ford Professor of Engineering, MIT',
    office: '31-233',
    webpage: 'https://www.mit.edu/~jhow/',
    portrait: '/images/members/s_jon2.gif',
    active: true,
  },

  // UROPs
  { kerberos: 'sni', name: 'Susan Ni', position: 'UROP', active: false },
  { kerberos: 'mnasir', name: 'Mohammed Nasir', position: 'UROP', active: false },
  { kerberos: 'rewang', name: 'Rose Wang', position: 'SuperUROP', active: false },
  { kerberos: 'jjgraves', name: 'Josh Graves', position: 'UROP', active: false },
  { kerberos: 'bckoenig', name: 'Ben Koenig', position: 'UROP', active: false },
];
