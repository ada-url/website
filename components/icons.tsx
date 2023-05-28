import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  type Icon as LucideIcon,
  Image,
  Laptop,
  Link,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,
  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  link: Link,
  gitHub: (props: LucideProps) => (
    // rome-ignore lint/a11y/noSvgWithoutTitle: Unnecessary.
    <svg viewBox='0 0 438.549 438.549' {...props}>
      <path
        fill='currentColor'
        d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
      />
    </svg>
  ),
  logo: (props: LucideProps) => (
    // rome-ignore lint/a11y/noSvgWithoutTitle: Unnecessary.
    <svg viewBox='0 0 660 728' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        className='fill-black dark:fill-white'
        d='m486.228698 267.865457c-6.371444-1.358509-12.401319-2.091996-18.049549-2.154318-11.014695-.119851-20.726616 2.328102-28.932918 7.710003-6.407205 4.200772-15.106132 2.555819-19.428159-3.67163-4.32141-6.227449-2.628976-14.682326 3.777612-18.882498 13.069045-8.566937 28.08701-12.474074 44.80604-12.288905 5.46943.061723 11.102245.563898 16.8855 1.48675-2.029688-2.567804-4.122881-4.930064-6.287594-7.084383-7.674218-7.6327-16.28991-12.559168-25.953741-14.3815-7.587284-1.408847-12.564705-8.532181-11.114576-15.906003 1.45013-7.373823 8.778462-12.211601 16.36513-10.802156 15.527236 2.930353 29.0328 10.50912 40.738649 22.149033 3.793642 3.775301 7.391838 7.983863 10.800135 12.605311.433436-3.185635.671425-6.2664.707185-9.242896.12331-10.70208-2.395303-20.145127-7.932554-28.121199-4.32141-6.22745-2.628976-14.682326 3.777612-18.883098 6.407205-4.200172 15.106132-2.555819 19.427542 3.67163 8.814222 12.701791 12.834139 27.306813 12.643624 43.548998-.091249 7.644086-1.120274 15.616563-3.018636 23.889866 8.49978-1.849298 16.686353-2.845259 24.531972-2.933948h.051174c16.719031-.18517 31.741311 3.721967 44.80604 12.2925 6.407205 4.200172 8.099023 12.655049 3.777612 18.882498-4.322027 6.227449-13.020954 7.872402-19.428158 3.67163-8.186573-5.370515-17.870749-7.821465-28.853383-7.713599h-.027745c-3.078443.034757-6.268481.266069-9.560866.69094 4.754846 3.312677 9.084271 6.810523 12.969163 10.497135 11.975899 11.378039 19.773427 24.504101 22.787748 39.595718 1.45013 7.373822-3.527291 14.497156-11.113959 15.906003-7.586668 1.409446-14.915001-3.428333-16.36513-10.802155-1.874934-9.393309-6.943605-17.767287-14.796006-25.226203-2.216503-2.103981-4.651266-4.138449-7.288874-6.107598.948873 5.621603 1.465544 11.095789 1.529048 16.408177.190515 16.242185-3.829402 30.847207-12.643624 43.548998-4.32141 6.227449-13.020337 7.871803-19.427542 3.67163-6.406588-4.200771-8.099022-12.655648-3.777612-18.883097 5.537251-7.976073 8.055864-17.41912 7.932554-28.1212-.075836-6.536065-1.131989-13.589885-3.086458-21.118315-23.494933 21.245956-42.506302 45.799796-57.290594 73.454176-16.523584 30.916721-27.804629 65.701626-34.192104 104.080858 21.565127 8.543567 40.961224 21.191425 57.167284 36.94282 31.368297 30.488254 50.77611 72.612225 50.77611 119.134122 0 7.52064-6.276496 13.620448-14.013602 13.620448-7.73834 0-14.014219-6.099808-14.014219-13.620448 0-39.004853-16.269564-74.322496-42.561176-99.87649-26.291611-25.553995-62.629314-41.367713-102.759427-41.367713-40.130729 0-76.467816 15.813718-102.760043 41.367713-26.291612 25.553994-42.561176 60.871637-42.561176 99.87649 0 7.52064-6.275879 13.620448-14.013602 13.620448-7.73834 0-14.014219-6.099808-14.014219-13.620448 0-46.521897 19.408429-88.645868 50.77611-119.134122 21.060787-20.469323 47.510852-35.695772 77.10718-43.494465-9.962241-62.620861-28.062964-119.288131-54.91872-169.516415-25.433371-47.571192-58.763536-89.375161-100.499766-125.00921-5.433669 16.851626-8.380786 32.49156-8.551571 46.775981-.21456 18.265267 4.143227 34.445129 13.707793 48.224379 4.322027 6.22685 2.629592 14.682326-3.777612 18.882498-6.407205 4.200772-15.106132 2.555819-19.427542-3.67163-12.845853-18.500174-18.700627-39.842611-18.418863-63.651578.15907-13.46584 2.291722-27.669361 6.232104-42.552438-11.054155 6.462956-20.6033063 13.431084-28.51613 20.951723-13.4217124 12.744338-22.0965938 27.141419-25.3458209 43.402181-1.4501295 7.373822-8.7790787 12.211601-16.3657465 10.802754-7.5866678-1.409445-12.5640892-8.53278-11.1133432-15.906602 4.3886145-21.963264 15.79297-41.11243 33.3375633-57.771696 9.8629764-9.369937 21.6964518-17.929084 35.3203933-25.739164-12.520314-3.034623-24.3174129-4.678976-35.327792-4.798827-18.7924937-.20854-35.4400043 4.026988-49.6163759 13.323217-6.4072045 4.200772-15.1061315 2.555819-19.42754188-3.67163-4.32202693-6.227449-2.62959271-14.682326 3.77699529-18.882498 19.03479849-12.48546 40.99266829-18.176577 65.48888109-17.902118 15.4994915.169588 31.9521714 2.740988 49.2624754 7.489478-4.881856-16.828854-7.526862-32.8199514-7.705662-47.8804067-.281764-23.8089667 5.57301-45.150804 18.418863-63.65157742 4.32141-6.22684988 13.020337-7.87180253 19.427542-3.67103093 6.407204 4.20017234 8.099639 12.65504915 3.777612 18.88249825-9.564566 13.7786507-13.922353 29.959112-13.707793 48.2243786.12701 10.7014806 1.815128 22.164014 4.937346 34.3330682 8.035517-13.2423184 16.841724-24.7396085 26.482125-34.3258772 17.140136-17.0487806 36.842043-28.1325853 59.443593-32.3986756 7.586668-1.4094458 14.915 3.4283329 16.36513 10.8021553 1.449513 7.3738223-3.527292 14.4971564-11.114576 15.9060029-16.734445 3.1580694-31.546481 11.5895753-44.658685 24.6311433-7.733407 7.6908278-14.907602 16.9756713-21.552795 27.7125083 15.308977-3.829833 29.922484-5.899058 43.777015-6.053665 24.49683-.270264 46.450384 5.420253 65.488881 17.902118 6.407205 4.200172 8.099023 12.655049 3.777612 18.882498-4.322027 6.227449-13.020337 7.872402-19.428158 3.67163-14.176372-9.296229-30.823266-13.527563-49.61576-13.323217-13.528992.150413-28.246079 2.59477-44.027335 7.099963 43.101891 37.371287 77.604121 80.982008 104.027057 130.406692 28.110439 52.583353 47.081733 111.783072 57.552629 177.110164 5.910264-.590266 11.911777-.895885 17.981728-.895885 13.226882 0 26.109112 1.444202 38.490085 4.173805 6.986764-39.804259 18.950948-76.029172 36.257552-108.400881 15.781256-29.515664 35.999217-55.852884 60.912835-78.801322zm-437.3263395 444.292787c-6.9514412-3.272295-9.8633399-11.433174-6.5106181-18.217258 3.3521052-6.784085 11.7135638-9.626131 18.6650051-6.353836 27.8156297 13.091585 54.9647845 16.15026 81.4782905 10.025088 27.196627-6.284034 54.138626-22.19841 80.822912-46.846528 5.426132-5.008934 13.898567-4.927698 19.22482.06559 34.61232 31.952111 69.634021 49.223425 105.080514 49.855258 35.482252.628223 72.422612-15.417936 110.951168-50.083921 5.390373-4.84225 13.643937-4.764625 18.938747 0 28.964236 26.067035 57.023397 41.60171 84.215709 47.412771 26.533235 5.667845 52.613317 2.104907 78.253191-9.893306 6.950825-3.244615 15.28454-.376092 18.608901 6.407993 3.324977 6.784686.385335 14.917885-6.566107 18.162499-31.39462 14.697045-63.453249 19.031421-96.206714 12.033717-28.99198-6.194975-58.249687-21.252465-87.778053-45.834993-40.83255 33.991428-81.109601 49.742731-120.853349 49.041096-39.410819-.698026-77.471424-17.589036-114.292176-48.909314-27.331649 23.252669-55.338405 38.554468-84.052327 45.191727-32.76148 7.571168-66.0827746 3.899916-99.9799135-12.056583z'
        fillRule='evenodd'
      />
    </svg>
  ),
}
