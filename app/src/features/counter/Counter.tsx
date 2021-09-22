import {
  decrement,
  increment,
} from '../../redux/actions'
import styles from './Counter.module.css'
import { connect } from "react-redux";
import { AppState } from '../../app/store';

function Counter({increment, decrement, value}) {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement(value - 1)}
        >
          -
        </button>
        <span className={styles.value}>{value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
    return {
        value: state.profile.value,
    };
};

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);