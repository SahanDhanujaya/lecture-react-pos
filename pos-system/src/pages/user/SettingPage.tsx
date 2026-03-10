interface SettingPageProps { 
    avatar: string
}

const SettingPage = ({avatar}: SettingPageProps) => {
    return (
        <div className="p-4">
            <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full mx-auto mb-4" />
            <h1 className="text-2xl font-bold mt-4 text-center">Welcome to the Setting Page</h1>
            <p className="text-center">Here you can manage your account settings, change your password, and update your profile information.</p>
        </div>
    )
}
export default SettingPage