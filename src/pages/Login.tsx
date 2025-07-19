import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function Login() {
    return (
        <div className="p-4">
            <Button variant="primary" onClick={() => alert('Login clicked!')}>
                Login
            </Button>
            <Input placeholder="Email" value="" />
            <Input placeholder="Password" value="" />
        </div>
    );
}
