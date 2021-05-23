import { makeStyles } from '@material-ui/core/styles';

// ==============================================

const buttonStyles = makeStyles(() => ({
  root: {
    padding: '0 30px',
    height: '60px',
    width: '100%',
    borderRadius: '5px',
    border: 'none',
    color: 'var(--text-primary)',
    background: 'var(--translucent-primary)',
    transition: 'all 0.3s ease',
    '&:hover': { 
      boxShadow: 'var(--hover-shadow)',
      transform: 'scaleX(1.01) scaleY(1.01)',
      color: 'var(--text-secondary)'
    }
  },
}));

// ==============================================

const inputStyles = makeStyles({
  root: {
  '& *': { color: 'var(--text-primary)' },
  '& .MuiInput-underline::before': {
    borderBottom: '2px solid var(--translucent-primary)',
  },
  '&.MuiFormLabel-root': {color: 'var(--text-primary)'}
  },
});

// ==============================================

export {buttonStyles, inputStyles};