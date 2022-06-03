import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    backgroundColor: 'rgb(245, 250, 245)'
  },
  h1: {
    color: 'rgb(129, 169, 184)',
    fontSize: [{ unit: 'px', value: 30 }]
  },
  'pselector h1': {
    color: '#7470a3ed'
  },
  'pselector p': {
    color: 'rgb(100, 106, 147)',
    fontSize: [{ unit: 'px', value: 20 }]
  },
  '#rcorners1': {
    borderRadius: '25px',
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }, { unit: 'px', value: 20 }],
    width: [{ unit: 'px', value: 300 }],
    height: [{ unit: 'px', value: 10 }],
    alignSelf: 'center'
  },
  searchbox: {
    textAlign: 'center'
  },
  reactjsimg: {
    textAlign: 'center'
  },
  button: {
    display: 'inline-block',
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 25 }, { unit: 'px', value: 15 }, { unit: 'px', value: 25 }],
    fontSize: [{ unit: 'px', value: 15 }],
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    outline: 'none',
    color: 'black',
    backgroundColor: '#e0ede1',
    border: [{ unit: 'string', value: 'none' }],
    borderRadius: '15px',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 9 }, { unit: 'string', value: '#999' }, { unit: 'px', value: 9 }]
  },
  'button:hover': {
    backgroundColor: '#3e8e41'
  },
  'button:active': {
    backgroundColor: '#3e8e41',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'string', value: '#666' }, { unit: 'px', value: 5 }],
    transform: 'translateY(4px)'
  }
});
