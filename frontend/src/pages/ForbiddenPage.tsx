import { useNavigate } from 'react-router-dom';
import StatePanel from '../components/StatePanel';

function ForbiddenPage() {
  const navigate = useNavigate();

  return (
    <StatePanel
      variant="error"
      title="Akses ditolak"
      message="Role akunmu tidak memiliki izin untuk membuka halaman ini."
      actionLabel="Kembali ke Daftar Warung"
      onAction={() => navigate('/')}
    />
  );
}

export default ForbiddenPage;
