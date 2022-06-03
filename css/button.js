import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    display: 'inline-block',
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 25 }, { unit: 'px', value: 15 }, { unit: 'px', value: 25 }],
    fontSize: [{ unit: 'px', value: 15 }],
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    outline: 'none',
    color: 'white',
    backgroundColor: '#7c96ee',
    border: [{ unit: 'string', value: 'none' }],
    borderRadius: '15px',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 9 }, { unit: 'string', value: '#999' }, { unit: 'px', value: 9 }]
  },
  'button:hover': {
    backgroundColor: '#6c70eb'
  },
  'button:active': {
    backgroundColor: '#3e8e41',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'string', value: '#666' }, { unit: 'px', value: 5 }],
    transform: 'translateY(4px)'
  }
});
