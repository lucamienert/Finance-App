import { useTranslation } from "react-i18next"
import { supportedLngs } from "../i18n"

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    return (
        <select
            value={i18n.resolvedLanguage}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="form-select mb-2"
        >
            {Object.entries(supportedLngs).map(([code, name]) => (
                <option value={code} key={code}>
                    {name}
                </option>
            ))}
        </select>
    )
}

export default LanguageSwitcher
