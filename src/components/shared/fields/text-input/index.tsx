import TextInputProps from "./props";

function TextInput({ label, onChange, className = "", ...rest }: TextInputProps) {
    return (
        <div className={className}>
            {label && (
                <label className="text-xs font-poppins text-profile-panel-label font-semibold uppercase">
                    {label}
                </label>
            )}

            <input
                {...rest}
                autoComplete={"new-password"}
                onChange={(event) => onChange?.(event.target.value)}
                className={`w-full h-12 p-4 rounded-lg bg-[#F6F8FE] ${
                    label && "mt-2"
                }`}
            />
        </div>
    );
}

export default TextInput;
