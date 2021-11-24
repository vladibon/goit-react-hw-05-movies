import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button type='button' onClick={() => navigate(-1)}>
      Go back
    </button>
  );
}

export { GoBackButton };
