<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи, язык WordPress и ABSPATH. Дополнительную информацию можно найти
 * на странице {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется сценарием создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'wordpress');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется снова авторизоваться.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'F`s4qwgE=Ll;!PbJS@n^$!cy72c|^d3D;I)W$aSj5L p@rm<nKbS-F}SYu0Nc/5V');
define('SECURE_AUTH_KEY',  'r@ LtE-fDDe5jr7 -IjLq;(4-=A~@[H|hWc0CHtn?q}!jzFusW`4wmmh1W&<^p.h');
define('LOGGED_IN_KEY',    '*bG2mS[N/z7%mD@:w1Dv:[#Y%uy`^fq7~a+/3j13T$+BUKUs%ZOUI0Ff6 2y;O#%');
define('NONCE_KEY',        '.y:GFpQ1=Ef9MOqc=9Hhs+:Yw0Cngaix%aLzkQyKiCO%J,ergnp/q[mk;yCx@[VE');
define('AUTH_SALT',        'pUmqx|:g`7m[suwjq0$$JSBsB`V,qt1ab>bs)xAT{PbF8W.r%O_meuwWdS7j}]Ug');
define('SECURE_AUTH_SALT', '~.m|W3L!)V&09g3Y6+Z#LV@Ux&ZM2]L<o<$pb574fKe,;~;&o$*,*HWKSXIWIH_B');
define('LOGGED_IN_SALT',   '.T[zj(9Q?XpB[g%<~ 2N$qC7nR6ib?cq[4mOG,{[ij[t0;J8u4|jqU}B9#]gUql:');
define('NONCE_SALT',       'a7A&imYRq_u;S|>wmBr8kF[Pmn`IqxU/*~FuN+=]`i>+Gkg7`%8EvA#HQ: >6<D1');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько блогов в одну базу данных, если вы будете использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Язык локализации WordPress, по умолчанию английский.
 *
 * Измените этот параметр, чтобы настроить локализацию. Соответствующий MO-файл
 * для выбранного языка должен быть установлен в wp-content/languages. Например,
 * чтобы включить поддержку русского языка, скопируйте ru_RU.mo в wp-content/languages
 * и присвойте WPLANG значение 'ru_RU'.
 */
define('WPLANG', 'ru_RU');

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Настоятельно рекомендуется, чтобы разработчики плагинов и тем использовали WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
