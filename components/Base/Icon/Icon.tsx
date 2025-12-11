import clsx from 'clsx'

import styles from './Icon.module.scss'

const Icon = ({
    name,
    width,
    height,
    className = '',
    color,
    white,
    black,
    red,
    gray,
    blue,
    secondary,
    primary,
}: {
    name: string
    width?: number
    height?: number
    className?: string
    color?: boolean
    white?: boolean
    black?: boolean
    red?: boolean
    gray?: boolean
    blue?: boolean
    secondary?: boolean
    primary?: boolean
}) => {
    return (
        <div
            className={clsx(styles.iconBox, className)}
            style={(width && height) ? {
                minWidth: `${width}px`,
                minHeight: `${height}px`,
                maxWidth: `${height}px`,
                maxHeight: `${height}px`,
            } : {}}
        >
            <i className={clsx(
                styles.icon,
                color && styles.icon_color,
                white && styles.icon_white,
                black && styles.icon_black,
                red && styles.icon_red,
                blue && styles.icon_blue,
                gray && styles.icon_gray,
                blue && styles.icon_blue,
                secondary && styles.icon_secondary,
                primary && styles.icon_primary,
                styles[name],
            )} />
        </div>
    )
}

export default Icon
